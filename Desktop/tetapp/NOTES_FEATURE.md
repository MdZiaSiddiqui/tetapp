# Notes Feature Documentation

## Overview

The Notes feature provides comprehensive study material for TET (Teacher Eligibility Test) preparation. It displays HTML-formatted notes with proper formatting, mathematical equations, tables, and interactive table of contents.

## Features Implemented

### 1. Notes Library
- **19 HTML files** covering all major subjects in multiple languages:
  - Child Development & Pedagogy (English, Telugu, Urdu)
  - Mathematics (English, Telugu, Urdu)
  - Physical Science (English, Telugu, Urdu)
  - Biological Science (English, Telugu, Urdu)
  - Environmental Studies (English, Telugu, Urdu)
  - Social Studies (English, Telugu, Urdu)
  - English Language & Pedagogy

### 2. User Interface
- **Notes Tab**: New tab in the bottom navigation with 📖 icon
- **Search Functionality**: Search notes by subject name or language
- **Language Filter**: Filter notes by language (All, English, Telugu, Urdu)
- **Subject Organization**: Notes grouped by subject for easy browsing
- **Clean Card Design**: Each note displayed with icon, name, and language

### 3. Note Viewer
- **Mobile-Optimized Display**: Custom CSS for optimal mobile reading
- **WebView Integration**: Renders HTML with full formatting support
- **MathJax Support**: Mathematical equations rendered properly
- **Interactive TOC**: Clickable table of contents for quick navigation
- **Scroll to Top**: Quick button to return to top of page
- **Responsive Design**: Adapts to different screen sizes

### 4. Mobile Optimizations
- **Typography**: Adjusted font sizes for mobile readability
- **Touch-Friendly**: Large tap targets for links and buttons
- **Smooth Scrolling**: Native scroll behavior with momentum
- **Sticky TOC**: Table of contents stays accessible while scrolling
- **Images**: Responsive images that fit screen width
- **Tables**: Scrollable tables that don't overflow screen

### 5. Reading Progress & Tracking
- **Recent Notes**: Tracks recently accessed notes
- **Scroll Position**: Saves scroll position for resuming later
- **Reading Progress**: Tracks reading time and position
- **Bookmarks**: (Foundation laid for future implementation)

## File Structure

```
tetapp/
├── app/
│   ├── (tabs)/
│   │   ├── notes.tsx           # Main notes listing screen
│   │   └── _layout.tsx         # Updated with notes tab
│   ├── notes/
│   │   ├── viewer.tsx          # WebView-based note viewer
│   │   └── _layout.tsx         # Notes stack navigator
│   └── _layout.tsx             # Updated with notes route
├── lib/
│   ├── notes-data.ts           # Note definitions and helpers
│   └── notes-storage.ts        # Progress & bookmark storage
├── xhtml/                      # HTML note files (19 files)
│   ├── development_tet.html
│   ├── maths_tet.html
│   ├── physics_tet.html
│   ├── biology_tet.html
│   ├── evs_eng.html
│   ├── social_studies_tet.html
│   ├── english_tet.html
│   └── ... (and language variants)
└── metro.config.js             # Updated to handle HTML assets
```

## Technical Implementation

### 1. HTML Asset Loading
- Uses `expo-asset` to bundle HTML files
- Metro bundler configured to handle `.html` files as assets
- Each note mapped to its HTML file via `notes-data.ts`

### 2. WebView Configuration
```typescript
- JavaScript enabled for MathJax
- DOM storage for interactive features
- Scroll event tracking for progress
- Mixed content mode for external CDN assets
```

### 3. Mobile CSS Injection
The viewer injects mobile-optimized CSS that includes:
- Responsive typography with viewport-based sizing
- Touch-friendly tap targets (min 44px)
- Sticky table of contents
- Scrollable tables for long content
- Optimized code blocks and math display
- Smooth transitions and hover effects

### 4. Progress Tracking
Uses AsyncStorage to persist:
- Recently accessed notes (last 10)
- Scroll positions per note
- Reading timestamps
- Bookmarks (foundation for future)

## Usage Instructions

### For Users

1. **Access Notes**
   - Tap the 📖 icon in the bottom tab bar
   - Browse subjects or use search to find specific topics

2. **Filter by Language**
   - Use language chips at the top to filter: All, English, తెలుగు, اردو
   - Each subject shows available language variants

3. **Read Notes**
   - Tap any note card to open the viewer
   - Use the table of contents to navigate sections
   - Tap ↑ button to scroll to top
   - Tap ‹ to go back to notes list

4. **Navigation Tips**
   - Clickable TOC links jump to specific sections
   - Scroll position is auto-saved
   - Recent notes appear first on next visit

### For Developers

#### Adding New Notes

1. **Add HTML File**
   ```bash
   # Place HTML file in xhtml/ directory
   cp new_subject.html xhtml/
   ```

2. **Update notes-data.ts**
   ```typescript
   {
     id: 'subject-language',
     subject: 'Subject Name',
     language: 'english',
     fileName: 'new_subject.html',
     displayName: 'Subject (English)',
     icon: '📚',
   }
   ```

3. **Update viewer.tsx**
   ```typescript
   // Add to htmlFiles map
   'subject-language': require('../../xhtml/new_subject.html'),
   ```

4. **Rebuild**
   ```bash
   npx expo start --clear
   ```

#### Customizing Styles

Edit the `injectMobileCSS` function in `viewer.tsx` to customize:
- Font sizes and families
- Colors and themes
- Spacing and layout
- Table styles
- Math rendering

## Dependencies

```json
{
  "react-native-webview": "^13.x.x",
  "expo-asset": "~10.x.x",
  "expo-file-system": "~17.x.x",
  "@react-native-async-storage/async-storage": "^2.2.0"
}
```

## Performance Considerations

1. **Lazy Loading**: Notes loaded only when accessed
2. **Asset Bundling**: HTML files bundled with app for offline access
3. **Scroll Throttling**: Progress saved max once per second
4. **Memory Management**: WebView cleaned up on unmount
5. **Cache Control**: Metro cache can be cleared if needed

## Future Enhancements

### Planned Features
- [ ] Full bookmark implementation with UI
- [ ] Search within note content
- [ ] Highlight and annotation tools
- [ ] Dark mode support
- [ ] Font size adjustment
- [ ] Offline sync status
- [ ] Export to PDF
- [ ] Share notes functionality
- [ ] Reading statistics and insights

### Potential Improvements
- [ ] Lazy load images for faster initial render
- [ ] Implement virtual scrolling for very long notes
- [ ] Add reading mode (hide TOC, minimal UI)
- [ ] Sync reading progress across devices
- [ ] Add audio narration for accessibility
- [ ] Multi-language search support

## Troubleshooting

### Notes Not Loading

1. **Check metro bundler**
   ```bash
   npx expo start --clear
   ```

2. **Verify HTML file exists**
   ```bash
   ls xhtml/
   ```

3. **Check console for errors**
   - Look for asset loading failures
   - Verify file mapping in viewer.tsx

### Formatting Issues

1. **Math not rendering**: Ensure MathJax CDN is accessible
2. **Images broken**: Check image paths in HTML
3. **Styles not applied**: Verify CSS injection in injectMobileCSS

### Performance Issues

1. **Slow loading**: HTML file too large, consider splitting
2. **Laggy scrolling**: Reduce scroll event throttle value
3. **Memory warnings**: Check for WebView cleanup on unmount

## Testing Checklist

- [x] Notes tab appears in bottom navigation
- [x] Search functionality works
- [x] Language filter works correctly
- [x] Notes organized by subject
- [ ] Tap note card opens viewer (needs device testing)
- [ ] WebView loads HTML correctly (needs device testing)
- [ ] Table of contents links work (needs device testing)
- [ ] Scroll to top button works (needs device testing)
- [ ] Back navigation works (needs device testing)
- [ ] Progress tracking saves (needs device testing)
- [ ] Recent notes persist (needs device testing)

## Support

For issues or questions:
1. Check console logs for errors
2. Verify all dependencies are installed
3. Clear metro cache: `npx expo start --clear`
4. Check HTML file format matches expected structure

---

**Version**: 1.0.0
**Last Updated**: November 13, 2025
**Status**: Beta - Ready for testing on device
