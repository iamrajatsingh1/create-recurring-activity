import { MenuItem, Select } from '@mui/material';
import React from 'react';
import { getTimeOptions } from '../config/options';
import { ReactComponent as DownIcon } from "../assets/icons/down_arrow.svg";

export const CustomInput = ({ type, name, label, formData, handleOnChange, placeholder, options = [], width }) => {
    switch (type) {
        case "select":
            return <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                <label style={{ fontWeight: 600, fontSize: '14px' }}>{label}</label>
                <Select
                    name={name}
                    value={formData && formData[name] ? formData[name] : ''}
                    onChange={(e) => handleOnChange(name, e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label', style: { gap: "10px" } }}
                    style={{
                        height: '44px',
                        padding: '10px 14px',
                        borderRadius: '8px',
                    }}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                maxHeight: 48 * 4.5 + 8,
                                width: 250,
                            },
                        },
                    }}
                    IconComponent={DownIcon}
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
            return <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: 600, fontSize: '14px' }}>{label}</label>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
                    <Select
                        name={'from'}
                        value={formData && formData['from'] ? formData['from'] : ''}
                        onChange={(e) => handleOnChange('from', e.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={{
                            height: '44px',
                            padding: '10px 14px',
                            borderRadius: '8px',
                        }}
                        IconComponent={DownIcon}
                    >
                        {timeOptions.map((eachOption, index) => {
                            return <MenuItem key={index} value={eachOption.value}>{eachOption.label}</MenuItem>
                        })}
                    </Select>
                    <span>to</span>
                    <Select
                        name={'to'}
                        value={formData && formData['to'] ? formData['to'] : ''}
                        onChange={(e) => handleOnChange('to', e.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={{
                            height: '44px',
                            padding: '10px 14px',
                            borderRadius: '8px',
                        }}
                        IconComponent={DownIcon}
                    >
                        {timeOptions.map((eachOption, index) => {
                            return <MenuItem key={index} value={eachOption.value} selected={formData && formData['to'] && formData['to'] === eachOption.value}>{eachOption.label}</MenuItem>
                        })}
                    </Select>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}>
                    <input type='checkbox' name='allDay' value={formData["allDay"]} onChange={(e) => handleOnChange("allDay", e.target.value)} />
                    <span style={{ fontSize: '12px', color: '#777' }}>
                        All day
                    </span>
                </div>
            </div>;
        case 'week-selector':
            return <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontWeight: 600, fontSize: '14px' }}>{label}</label>
                <div style={{ display: 'flex', gap: '8px' }}>
                    {['M', 'T', 'W', 'T', 'F'].map((eachWeek, index) => {
                        const isSelected = formData["repeatEvery"] && formData["repeatEvery"] === eachWeek;

                        return (
                            <div
                                key={index}
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    backgroundColor: '#E0F9C8',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    border: '2px solid',
                                    transition: 'border-color 0s',
                                    borderColor: isSelected ? '#2F991E' : 'transparent',
                                }}
                                onMouseOver={(e) => (e.target.style.borderColor = '#2F991E')}
                                onMouseOut={(e) => (e.target.style.borderColor = 'transparent')}
                                onClick={() => handleOnChange('repeatEvery', eachWeek)}
                            >
                                <span style={{ fontWeight: '500', color: '#094F0C', fontSize: '16px' }}>
                                    {eachWeek}
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>;
        default:
            return <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
                <label style={{ fontWeight: 600, fontSize: '14px' }}>{label}</label>
                <input
                    type="text"
                    placeholder={placeholder}
                    style={{
                        width: width ? width : '278px',
                        height: '44px',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #c8c8c8',
                        boxSizing: 'border-box',
                        transition: 'border-color 0.3s',
                    }}
                    onChange={(e) => handleOnChange(name, e.target.value)}
                    onFocus={(e) => (e.target.style.borderColor = '#2F991E')}
                    onBlur={(e) => (e.target.style.borderColor = '')}
                    onMouseOver={(e) => (e.target.style.borderColor = '#2F991E')}
                    onMouseOut={(e) => (e.target.style.borderColor = '')}
                />
            </div>;
    }
}