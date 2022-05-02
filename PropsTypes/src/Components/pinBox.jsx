import { forwardRef } from "react"
import PropTypes from 'prop-types';

const styles = {
    width:20,
    fontSize:22,
    padding:5,
    margin:5
}

export const PinBox = forwardRef(({onChange,max,onBackSpace},ref) =>
{
    const handleChange = (e) =>
    {
        onChange(e.target.value)
        switch(e.keyCode)
        {
            case 8:
                {if(!e.target.value)
                {
                    onBackSpace(e.target.value)
                }
                break}
            case 9:
                {e.preventDefault()
                break}
            default:
                onChange(e.target.value)
        }
    }

    

    return <input style={styles} ref={ref} maxLength={max} type="text" onKeyUp={handleChange}/>
})

PinBox.propTypes ={
    length:PropTypes.oneOf([4,8]),
    max:PropTypes.number,
    label:PropTypes.string,
    onChange:PropTypes.func
}

PinBox.defaultProps = {
    label:"Input label",
    perBox:1
}