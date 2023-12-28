import React from 'react';
import Button from '@mui/material/Button';
import { CustomInput } from './CustomInput';
import { categoryOptions } from '../config/options';
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";

const RecurringActivityDialog = ({ isOpen, onClose, formData, handleOnChange, onFormSubmit }) => {
  return (
    <>
      {isOpen && <div className="modal-backdrop" onClick={onClose}></div>}
      <dialog className='modal' open={isOpen} onClose={onClose}>
        <div className='modal-container'>
          <div className='modal-header-container'>
            <span className='modal-header'>
              New recurring activity
            </span>
            <button className='modal-header-btn' onClick={onClose} aria-label="close">
              <CloseIcon />
            </button>
          </div>
          <form onSubmit={onFormSubmit}>
            <div className='modal-content'>
              <div className='modal-row'>
                <CustomInput label={"Title"} name={'title'} placeholder={"Eg. Breakfast, Playtime"} handleOnChange={handleOnChange} />
                <CustomInput type={"select"} name={'category'} formData={formData} label={"Category"} handleOnChange={handleOnChange} options={categoryOptions} />
              </div>
              <div className='modal-row'>
                <CustomInput label={"Description"} name={'description'} formData={formData} placeholder={"Optional description"} width={"100%"} handleOnChange={handleOnChange} />
              </div>

              <div className='modal-row'>
                <CustomInput type={"time-selector"} name={'time'} label={"Time"} formData={formData} handleOnChange={handleOnChange} />
              </div>

              <div className='modal-row'>
                <CustomInput type={"week-selector"} name={'repeatEvery'} label={"Repeat every"} formData={formData} handleOnChange={handleOnChange} />
              </div>
            </div>
            <hr className='modal-divider' />
            <div className='modal-actions'>
              <Button className="cancel-btn" onClick={onClose} variant='outlined'>
                Cancel
              </Button>
              <Button className='add-btn' type='submit'>
                Add
              </Button>
            </div>
          </form>
        </div>

      </dialog>
    </>
  );
};

export default RecurringActivityDialog;
