import React from 'react'
import zxcvbn from 'zxcvbn';
import { ProgressBar } from 'react-bootstrap';

export default function PasswordStrengthMeter({password}) {
     const testResult = zxcvbn(password);
     const num =testResult.score * 100/4;

    const createPassLabel = () => {
        switch(testResult.score){
            case 0:
                return 'Very weak';
            case 1:
                return 'Weak';
            case 2:
                return 'Good';
            case 3:
                return 'Fair';
            case 4:
                return 'Strong';
            default:
                return '';
        }

    }

    const funcProgressColor = ()=>{
        switch(testResult.score){
            case 0:
                return '#828282';
            case 1:
                return '#EA1111';
            case 2:
                return '#FFAD00';
            case 3:
                return '#9bc158';
            case 4:
                return '#00b500';
            default:
                return 'none';
        }
    }

    const changePasswordColor = () => ({
        width: `${num}%`,
        background: funcProgressColor(),
        height: '7px'
    })
    return (
        <>
        <div style={{ height: '7px'}} >
            <ProgressBar   style={changePasswordColor()}/>
        </div>
        <p className="text-right" style={{ color: funcProgressColor()}}><b>{createPassLabel()}</b></p>
        </>
        
    )
}


