import React from 'react'
import "./ListTask.css"
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setCheck } from '../../Redux/Reducers/todoSlice';

const ListTask = ({ name, done, id }) => {
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))
    }
    return (
        <div className="todoItem">
            {/* checkbox */}
            <Checkbox
                checked={done}
                color="primary"
                onChange={handleCheck}
                inputProps={{ 'aria-label': ' secondary checkbox' }}
            />
            {/* name */}
            <p className={done && 'listTask--done'}>{name}</p>
        </div>
    )
}

export default ListTask
