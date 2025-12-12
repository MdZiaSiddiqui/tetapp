const fs = require('fs');
const path = require('path');

// Question IDs to delete
const idsToDelete = new Set([
  6, 12, 31, 64, 66, 92, 104, 105, 156, 157, 166, 183,
  199, 212, 227, 337, 351, 364, 374, 451, 464, 465, 468, 487, 459,
  524, 549, 551, 564, 571, 575, 592, 607, 613, 621,
  633, 637, 640, 656, 661, 701, 427
]);

// Function to find matching closing brace
function findClosingBrace(content, start) {
  let depth = 0;
  let inString = false;
  let escapeNext = false;

  for (let i = start; i < content.length; i++) {
    const char = content[i];

    if (escapeNext) {
      escapeNext = false;
      continue;
    }

    if (char === '\\' && inString) {
      escapeNext = true;
      continue;
    }

    if (char === '"') {
      inString = !inString;
      continue;
    }

    if (!inString) {
      if (char === '{') depth++;
      if (char === '}') {
        depth--;
        if (depth === 0) return i;
      }
    }
  }
  return -1;
}

// Files to process
const files = [
  'data/mathematicsPaper1DataUrdu.ts',
  'data/mathematicsPaper2DataTelugu.ts'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');

  let deletedCount = 0;
  const deletedIds = [];
  const notFoundIds = [];

  idsToDelete.forEach(id => {
    // Find the question object start
    const idPattern = new RegExp(`\\{\\s*"id":\\s*${id}\\s*,`);
    const match = content.match(idPattern);

    if (match) {
      const startIndex = content.indexOf(match[0]);
      const endIndex = findClosingBrace(content, startIndex);

      if (endIndex !== -1) {
        // Find the next non-whitespace character
        let afterEnd = endIndex + 1;
        while (afterEnd < content.length && /\s/.test(content[afterEnd])) {
          afterEnd++;
        }
        // Remove trailing comma if present
        if (content[afterEnd] === ',') {
          afterEnd++;
        }

        content = content.slice(0, startIndex) + content.slice(afterEnd);
        deletedCount++;
        deletedIds.push(id);
      }
    } else {
      notFoundIds.push(id);
    }
  });

  // Clean up any double commas or trailing commas before ]
  content = content.replace(/,(\s*),/g, ',');
  content = content.replace(/,\s*\]/g, '\n]');
  content = content.replace(/\[\s*,/g, '[');

  // Write back to file
  fs.writeFileSync(filePath, content, 'utf8');

  console.log(`${file}:`);
  console.log(`  Removed ${deletedCount} questions: ${deletedIds.join(', ')}`);
  if (notFoundIds.length > 0) {
    console.log(`  Not found (${notFoundIds.length}): ${notFoundIds.join(', ')}`);
  }
  console.log();
});

console.log('Done!');
