import { MenuItem, Select } from '@mui/material';
import { makeStyles } from "@mui/styles"
import React from 'react';
import { getTimeOptions } from '../config/options';
import { ReactComponent as DownIcon } from "../assets/icons/down_arrow.svg";

const useStyles = makeStyles((_theme) => ({
    selectInputBox: {
        height: '44px',
        padding: '10px 14px',
        fontSize: '14px !important',
        borderColor: '#c8c8c8',
        border: "2px",
        borderRadius: '8px !important',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s',
        '&:active': {
            borderColor: '#2F991E !important',
        },
        '&:focus': {
            borderColor: '#2F991E !important',
        },
        '& .MuiInputBase-root':{
            display: "flex",
        },
        '&:hover': {
            borderColor: '#2F991E !important',
        },
    },
    select: { 
        color: "red"
    }
}));

let selectMenuStyle = {
    maxHeight: "320px",
    padding: "8px, 4px, 8px, 8px",
    borderRadius: "8px",
    '& .MuiMenuItem-root': {
        gap: "4px",
    },
    '& .MuiButtonBase-root:hover': {
        backgroundColor: "#F1F5F2",
    },
    '& .MuiMenuItem-root.Mui-selected': {
        backgroundColor: "#E1E9E1",
    },
}


export const CustomInput = ({ type, name, label, formData, handleOnChange, placeholder, options = [], width }) => {
    const classes = useStyles();

    switch (type) {
        case "select":
            return <div className='label-input-row'>
                <label className='label'>{label}</label>
                <Select
                    name={name}
                    classes={{
                        root: classes.selectInputBox,
                        select: classes.select,
                        outlined: classes.select,
                    }}
                    value={formData && formData[name] ? formData[name] : ''}
                    onChange={(e) => handleOnChange(name, e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    MenuProps={{
                        PaperProps: {
                            sx: selectMenuStyle
                        },
                    }}
                    IconComponent={() => <div>
                        <DownIcon />
                    </div>}
                >
                    {options.map((eachOption, index) => {
                        return <MenuItem key={index} value={eachOption.value}>
                            {eachOption.icon ? eachOption.icon : ""}
                            {eachOption.label}
                        </MenuItem>
                    })}
                </Select>
            </div>;
        case "time-selector":
            const timeOptions = getTimeOptions();
            return <div className='week-selector-container'>
                <label className='label'>{label}</label>
                <div className='time-selector-container'>
                    <Select
                        name={'from'}
                        classes={{
                            root: classes.selectInputBox
                        }}
                        value={formData && formData['from'] ? formData['from'] : ''}
                        onChange={(e) => handleOnChange('from', e.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        IconComponent={() => <div>
                            <DownIcon />
                        </div>}
                        MenuProps={{
                            PaperProps: {
                                sx: selectMenuStyle
                            },
                        }}
                    >
                        {timeOptions.map((eachOption, index) => {
                            return <MenuItem key={index} value={eachOption.value}>{eachOption.label}</MenuItem>
                        })}
                    </Select>
                    <span>to</span>
                    <Select
                        name={'to'}
                        classes={{
                            root: classes.selectInputBox
                        }}
                        value={formData && formData['to'] ? formData['to'] : ''}
                        onChange={(e) => handleOnChange('to', e.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        IconComponent={() => <div>
                            <DownIcon />
                        </div>}
                        MenuProps={{
                            PaperProps: {
                                sx: selectMenuStyle
                            },
                        }}
                    >
                        {timeOptions.map((eachOption, index) => {
                            return <MenuItem key={index} value={eachOption.value} selected={formData && formData['to'] && formData['to'] === eachOption.value}>{eachOption.label}</MenuItem>
                        })}
                    </Select>
                </div>
                <div className='all-day-checkbox-container'>
                    <input type='checkbox' name='allDay' value={formData["allDay"]} onChange={(e) => handleOnChange("allDay", e.target.value)} />
                    <span>
                        All day
                    </span>
                </div>
            </div>;
        case 'week-selector':
            return <div className='week-selector-container'>
                <label className='label'>{label}</label>
                <div className='week-selector-container-btn-grp'>
                    {['M', 'T', 'W', 'T', 'F'].map((eachWeek, index) => {
                        const isSelected = formData["repeatEvery"] && formData["repeatEvery"] === eachWeek;
                        return (
                            <div
                                key={index}
                                className='week-btn'
                                style={{
                                    borderColor: isSelected ? '#2F991E' : 'transparent',
                                }}
                                onMouseOver={(e) => (e.target.style.borderColor = '#2F991E')}
                                onMouseOut={(e) => (e.target.style.borderColor = 'transparent')}
                                onClick={() => handleOnChange('repeatEvery', eachWeek)}
                            >
                                <span className='week-text'>
                                    {eachWeek}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>;
        default:
            return <div className='label-input-row'>
                <label className='label'>{label}</label>
                <input
                    type="text"
                    placeholder={placeholder}
                    className='input-box'
                    style={{
                        width: width ? width : '278px'
                    }}
                />
            </div>;
    }
}