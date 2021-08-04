import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { showOverview, showInternal, showSurface } from '../redux/displayContent';


const Buttons = (props) => {
    const dispatch = useDispatch();
    const activeBtn = useSelector((state) => state.overview.value);


    return (
        <div className="viewButtons">
            <div className="desktop-btn">
                <Button className={activeBtn.overview ? 'active' : 'b'}  onClick={() => dispatch(showOverview())}>01<span>overview</span></Button>
                <Button className={activeBtn.internal ? 'active' : 'b'} onClick={() => dispatch(showInternal())}>02<span>internal structure</span></Button>
                <Button className={activeBtn.surface ? 'active' : 'b'} onClick={() => dispatch(showSurface())}>03<span>surface geology</span></Button>
            </div>
            <div className="mobile-btn">
                <div className={activeBtn.overview ? 'active' : 'b'} onClick={() => dispatch(showOverview())}>overview</div>
                <div className={activeBtn.internal ? 'active' : 'b'} onClick={() => dispatch(showInternal())}>internal</div>
                <div className={activeBtn.surface ? 'active' : 'b'} onClick={() => dispatch(showSurface())}>surface</div>
            </div>
        </div>
    )
}

export default Buttons;