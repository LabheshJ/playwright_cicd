# Registration Feature - Comprehensive Test Cases

## Overview
Complete list of test cases for the User Registration feature to ensure full coverage of functionality and edge cases.

---

## ✅ POSITIVE TEST CASES (Valid Scenarios)

### 1. **Register with Valid Details**
- **Scenario**: User registers with all valid information
- **Expected**: Account created successfully, user redirected to dashboard/login
- **Tag**: @register-positive-001

### 2. **Register with Minimum Valid Data**
- **Scenario**: User registers with minimum required fields only
- **Expected**: Account created successfully
- **Tag**: @register-positive-002

### 3. **Register and Auto-Login**
- **Scenario**: After successful registration, user is automatically logged in
- **Expected**: User redirected to dashboard, session created
- **Tag**: @register-positive-003

### 4. **Register with Special Characters in Address**
- **Scenario**: User registers with special characters (-, ., &) in address
- **Expected**: Account created successfully
- **Tag**: @register-positive-004

### 5. **Register with International Characters in Name**
- **Scenario**: User registers with accented characters (é, ñ, ü) in name
- **Expected**: Account created successfully if system supports Unicode
- **Tag**: @register-positive-005

### 6. **Register and Verify Email Confirmation**
- **Scenario**: After registration, verify confirmation email is sent
- **Expected**: Confirmation email received with activation link
- **Tag**: @register-positive-006

### 7. **Register with Maximum Length Values**
- **Scenario**: User registers with maximum allowed length in each field
- **Expected**: Account created successfully
- **Tag**: @register-positive-007

### 8. **Register with Valid Phone Formats**
- **Scenario**: User registers with various valid phone formats (123-456-7890, (123) 456-7890, etc.)
- **Expected**: All formats accepted, account created
- **Tag**: @register-positive-008

---

## ❌ NEGATIVE TEST CASES (Invalid Scenarios)

### 9. **Register with Empty First Name**
- **Scenario**: User leaves first name field blank
- **Expected**: Validation error "First name is required"
- **Tag**: @register-negative-009

### 10. **Register with Empty Last Name**
- **Scenario**: User leaves last name field blank
- **Expected**: Validation error "Last name is required"
- **Tag**: @register-negative-010

### 11. **Register with Empty Email**
- **Scenario**: User leaves email field blank
- **Expected**: Validation error "Email is required"
- **Tag**: @register-negative-011

### 12. **Register with Invalid Email Format**
- **Scenario**: User enters email without @ symbol (e.g., "invalidemail.com")
- **Expected**: Validation error "Please enter valid email"
- **Tag**: @register-negative-012

### 13. **Register with Email Missing Domain**
- **Scenario**: User enters email as "user@" without domain
- **Expected**: Validation error for invalid email format
- **Tag**: @register-negative-013

### 14. **Register with Empty Password**
- **Scenario**: User leaves password field blank
- **Expected**: Validation error "Password is required"
- **Tag**: @register-negative-014

### 15. **Register with Weak Password (Too Short)**
- **Scenario**: User enters password with less than 8 characters (e.g., "Pass@1")
- **Expected**: Validation error "Password must be at least 8 characters"
- **Tag**: @register-negative-015

### 16. **Register with Password Missing Uppercase**
- **Scenario**: User enters password without uppercase letters (e.g., "pass@123")
- **Expected**: Validation error about password requirements
- **Tag**: @register-negative-016

### 17. **Register with Password Missing Lowercase**
- **Scenario**: User enters password without lowercase letters (e.g., "PASS@123")
- **Expected**: Validation error about password requirements
- **Tag**: @register-negative-017

### 18. **Register with Password Missing Numbers**
- **Scenario**: User enters password without numbers (e.g., "Pass@abcd")
- **Expected**: Validation error about password requirements
- **Tag**: @register-negative-018

### 19. **Register with Password Missing Special Characters**
- **Scenario**: User enters password without special characters (e.g., "Pass1234")
- **Expected**: Validation error about password requirements
- **Tag**: @register-negative-019

### 20. **Register with Mismatched Passwords**
- **Scenario**: User enters different values in password and confirm password fields
- **Expected**: Validation error "Passwords do not match"
- **Tag**: @register-negative-020

### 21. **Register with Empty Confirm Password**
- **Scenario**: User enters password but leaves confirm password blank
- **Expected**: Validation error "Please confirm password"
- **Tag**: @register-negative-021

### 22. **Register with Empty Phone Number**
- **Scenario**: User leaves phone number field blank
- **Expected**: Either validation error or field optional message
- **Tag**: @register-negative-022

### 23. **Register with Invalid Phone Format**
- **Scenario**: User enters phone with invalid characters (e.g., "phone123")
- **Expected**: Validation error "Please enter valid phone number"
- **Tag**: @register-negative-023

### 24. **Register with Empty Address**
- **Scenario**: User leaves address field blank
- **Expected**: Validation error "Address is required" or field optional
- **Tag**: @register-negative-024

### 25. **Register with Empty City**
- **Scenario**: User leaves city field blank
- **Expected**: Validation error or optional message
- **Tag**: @register-negative-025

### 26. **Register with Empty State**
- **Scenario**: User leaves state field blank
- **Expected**: Validation error or optional message
- **Tag**: @register-negative-026

### 27. **Register with Invalid ZIP Code Format**
- **Scenario**: User enters zip code with letters (e.g., "ABC123")
- **Expected**: Validation error "Please enter valid ZIP code"
- **Tag**: @register-negative-027

### 28. **Register with Duplicate Email**
- **Scenario**: User tries to register with email already in system
- **Expected**: Validation error "Email already registered"
- **Tag**: @register-negative-028

### 29. **Register with Duplicate Username**
- **Scenario**: User tries to register with username already taken
- **Expected**: Validation error "Username already exists"
- **Tag**: @register-negative-029

### 30. **Register with All Fields Empty**
- **Scenario**: User submits registration form without entering any data
- **Expected**: Multiple validation errors for required fields
- **Tag**: @register-negative-030

---

## 🔐 SECURITY TEST CASES

### 31. **Register with SQL Injection in Name**
- **Scenario**: User enters SQL injection attempt in first name (e.g., "'; DROP TABLE users; --")
- **Expected**: Field accepts value as plain text, no SQL execution
- **Tag**: @register-security-031

### 32. **Register with SQL Injection in Email**
- **Scenario**: User enters SQL injection attempt in email field
- **Expected**: Validation error or plain text entry
- **Tag**: @register-security-032

### 33. **Register with XSS Attempt in Name**
- **Scenario**: User enters XSS payload in name (e.g., "<script>alert('xss')</script>")
- **Expected**: Script not executed, stored as plain text
- **Tag**: @register-security-033

### 34. **Register with HTML Tags in Address**
- **Scenario**: User enters HTML tags in address field
- **Expected**: Tags displayed as text, not rendered as HTML
- **Tag**: @register-security-034

### 35. **Register and Verify Password Not Visible**
- **Scenario**: User enters password, verify it's masked/hidden
- **Expected**: Password field shows asterisks/dots, not plain text
- **Tag**: @register-security-035

---

## 🔍 BOUNDARY TEST CASES

### 36. **Register with Very Long First Name (100+ characters)**
- **Scenario**: User enters extremely long first name
- **Expected**: Either truncated or validation error
- **Tag**: @register-boundary-036

### 37. **Register with Single Character Name**
- **Scenario**: User enters single character for first/last name
- **Expected**: Accepted if minimum is 1, rejected if minimum > 1
- **Tag**: @register-boundary-037

### 38. **Register with Numbers Only in Name**
- **Scenario**: User enters "123" as first name
- **Expected**: Validation error or acceptance
- **Tag**: @register-boundary-038

### 39. **Register with Special Characters Only in Name**
- **Scenario**: User enters "!@#$" as first name
- **Expected**: Validation error for invalid name format
- **Tag**: @register-boundary-039

### 40. **Register with Leading/Trailing Spaces**
- **Scenario**: User enters " John " with spaces before/after
- **Expected**: Spaces trimmed or validation on spaces
- **Tag**: @register-boundary-040

---

## 🔄 FUNCTIONAL TEST CASES

### 41. **Register and Verify Account Details Saved Correctly**
- **Scenario**: After registration, retrieve account and verify all details
- **Expected**: All entered data saved correctly in database
- **Tag**: @register-functional-041

### 42. **Register with Terms and Conditions Unchecked**
- **Scenario**: User tries to submit without checking T&C checkbox
- **Expected**: Validation error "Please accept Terms and Conditions"
- **Tag**: @register-functional-042

### 43. **Register with Terms and Conditions Checked**
- **Scenario**: User checks T&C checkbox and submits
- **Expected**: Account created successfully
- **Tag**: @register-functional-043

### 44. **Register and Navigate to Login Page**
- **Scenario**: After registration, user clicks "Go to Login" button
- **Expected**: Redirected to login page
- **Tag**: @register-functional-044

### 45. **Register and Verify Session Created**
- **Scenario**: After successful registration, verify session cookie is set
- **Expected**: Session cookie present in browser
- **Tag**: @register-functional-045

---

## 📱 UI/UX TEST CASES

### 46. **Register Form Has All Required Fields**
- **Scenario**: Verify register page displays all expected input fields
- **Expected**: All fields visible and properly labeled
- **Tag**: @register-ui-046

### 47. **Register Form Validation Messages Are Clear**
- **Scenario**: Trigger various validation errors
- **Expected**: Error messages are clear, user-friendly, and specific
- **Tag**: @register-ui-047

### 48. **Register Page is Responsive**
- **Scenario**: View registration form on mobile, tablet, and desktop
- **Expected**: Form is usable and properly formatted on all devices
- **Tag**: @register-ui-048

### 49. **Register Form Has Proper Tab Order**
- **Scenario**: User navigates form using Tab key
- **Expected**: Tab order is logical (left to right, top to bottom)
- **Tag**: @register-ui-049

### 50. **Register Page Has Cancel/Back Button**
- **Scenario**: User clicks cancel button during registration
- **Expected**: User redirected to previous page without data loss warning
- **Tag**: @register-ui-050

---

## Total Test Cases: **50 Comprehensive Test Scenarios**

### Breakdown:
- ✅ Positive Cases: 8
- ❌ Negative Cases: 22
- 🔐 Security Cases: 5
- 🔍 Boundary Cases: 5
- 🔄 Functional Cases: 5
- 📱 UI/UX Cases: 5

---

## Implementation Priority:
**Phase 1 (Critical)**: Cases 1-10, 28-30 (Core Functionality)
**Phase 2 (Important)**: Cases 11-27 (Validation)
**Phase 3 (Nice-to-Have)**: Cases 31-50 (Security, UI, Edge Cases)
