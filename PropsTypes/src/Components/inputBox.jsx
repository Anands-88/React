
import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { PinBox } from './pinBox';

export const InputBox = ({label,length,perBox,onChange}) =>
{
    const [values,setValues] = useState(new Array(length).fill(""))
    const elements = useRef(new Array(length).fill(0))

    const handleChange = (value,index) =>{
        let val = [...values];
        val[index]=value
        setValues(val);
        if(value.length > 0 && value.length <= perBox && index < length - 1)
        {
            elements.current[index+1].focus()
        }
        onChange(val.join(""))
    }

    const handleBack = (value,index)=>
    {
        if(index > 0)
        {
            elements.current[index-1].focus()
        }
        let val = [...values];
        val[index]=value
        setValues(val);
        onChange(val.join(""))
    }

    const handlePaste = (e) =>
    {
        console.log("Value",e.clipboardData.getData("text"))
    }
   
    return <div onPaste={handlePaste}>
            {values.map((item,index)=>(
                <PinBox key={index} 
                max={perBox} 
                ref={n => elements.current[index]=n}
                onChange={(v)=>handleChange(v,index)}
                onBackSpace={(v)=> handleBack(v,index)}
                type="text" />
            ))}
    </div>
}

InputBox.propTypes ={
    length:PropTypes.oneOf([4,8]),
    perBox:PropTypes.number,
    label:PropTypes.string,
    onChange:PropTypes.func
}

InputBox.defaultProps = {
    label:"Input label",
    perBox:1
}