import React, { useState } from 'react';

function ForgotPassword() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleNextStep = (data = null) => {
        if (step === 1 && validateEmail(email)) {
            // Gọi API gửi mã xác nhận qua email tại đây (sử dụng fetch hoặc axios)
            // ...
            setStep(2);
        } else if (step === 2) {
            setVerificationCode(data);
            setStep(3);
        } else if (step === 3 && newPassword === confirmPassword) {
            // Gọi API đặt lại mật khẩu tại đây (sử dụng fetch hoặc axios)
            // ...
        }
    };

    const validateEmail = (email) => {
        // Thêm logic validate email tại đây
        return true; // Giả sử email hợp lệ
    };

    return (
        <div>
            {step === 1 && (
                <div>
                    <h2>Forgot Password</h2>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <button onClick={() => handleNextStep(email)}>Send Verification Code</button>
                </div>
            )}

            {step === 2 && (
                <div>
                    <h2>Verification Code</h2>
                    <input type="text" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} placeholder="Verification Code" />
                    <button onClick={() => handleNextStep(verificationCode)}>Verify</button>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h2>Reset Password</h2>
                    <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="New Password" />
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                    <button onClick={handleNextStep}>Reset Password</button>
                </div>
            )}

            {message && <p>{message}</p>}
        </div>
    );
}

export default ForgotPassword;
