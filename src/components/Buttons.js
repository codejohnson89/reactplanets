import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { showOverview, showInternal, showSurface } from '../redux/displayContent';


const Buttons = () => {
    const dispatch = useDispatch();
    return (
        <div className="viewButtons">
                <Button onClick={() => dispatch(showOverview())}>01<span>overview</span></Button>
                <Button onClick={() => dispatch(showInternal())}>02<span>internal structure</span></Button>
                <Button onClick={() => dispatch(showSurface())}>03<span>surface geology</span></Button>
        </div>
    )
}

export default Buttons;