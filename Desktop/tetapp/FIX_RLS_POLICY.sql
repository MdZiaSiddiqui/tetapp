-- ============================================
-- FIX: Allow Users to Create Payment Records
-- ============================================
--
-- Error: new row violates row-level security policy for table "payments"
-- Solution: Add policy to allow authenticated users to insert their own payments
--

-- Drop existing restrictive policies if they exist
DROP POLICY IF EXISTS "Users can view own payments" ON public.payments;
DROP POLICY IF EXISTS "Service role has full access to payments" ON public.payments;

-- Policy 1: Users can INSERT their own payment records
CREATE POLICY "Users can create own payments"
  ON public.payments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Policy 2: Users can SELECT (view) their own payments
CREATE POLICY "Users can view own payments"
  ON public.payments
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Policy 3: Users can UPDATE their own payments (for status changes during verification)
CREATE POLICY "Users can update own payments"
  ON public.payments
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Policy 4: Service role has full access (for Edge Functions with service key)
CREATE POLICY "Service role has full access to payments"
  ON public.payments
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Verify policies are active
SELECT
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd
FROM pg_policies
WHERE tablename = 'payments';

-- Success message
DO $$
BEGIN
  RAISE NOTICE '✅ RLS policies updated for payments table';
  RAISE NOTICE '   - Users can now create their own payment records';
  RAISE NOTICE '   - Users can view their own payments';
  RAISE NOTICE '   - Users can update their own payments';
  RAISE NOTICE '   - Service role has full access';
END $$;
