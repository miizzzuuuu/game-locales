import { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';
import Button from '../../../../components/Button';
import { langLogo, langName } from '../../../../utils/LangHelper';
import { SVGIconChevronDown } from '../../../../components/SVG/SVGIconChevronDown';

interface DropdownProps {
    initialValue?: string;
    options?: string[];
    onChange?: (value: string) => void;
    style?: React.CSSProperties;
}

export const Dropdown: React.FC<DropdownProps> = ({ initialValue, options, onChange, style }) => {
    const [selectedValue, setSelectedValue] = useState(initialValue);
    const [isOpen, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleBtnClick = () => {
        setOpen((currentBool) => !currentBool);
    };

    const handleOptionClick = (value: string) => {
        setSelectedValue(value);
        setOpen(false);
        onChange?.(value);
    };

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    const IconSelected = selectedValue && langLogo[selectedValue];

    return (
        <div ref={dropdownRef} className={styles.dropdown} style={style}>
            <Button
                style={{
                    height: '100%',

                    border: 'none',
                    background: 'none',
                    display: 'flex',
                    paddingLeft: '0.6rem',
                    paddingRight: '0.6rem',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.8rem',
                }}
                onClick={handleBtnClick}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    {IconSelected && (
                        <IconSelected
                            style={{
                                flex: '0 1 1.8rem',
                                width: '1.8rem',
                                height: '1.8rem',
                            }}
                        />
                    )}

                    <p
                        style={{
                            color: '#FFF',
                            fontSize: '1.3rem',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            letterSpacing: '0.026rem',
                            margin: '0px',
                            padding: '0px',
                        }}
                    >
                        {selectedValue && langName[selectedValue]}
                    </p>
                </div>

                <SVGIconChevronDown style={{ width: '1.8rem', height: '1.8rem' }} />
            </Button>

            {isOpen && (
                <div className={styles['dropdown-menu']}>
                    {options?.map((option) => {
                        const Icon = langLogo[option];

                        return (
                            <div
                                key={option}
                                className={styles['dropdown-item']}
                                onClick={() => handleOptionClick(option)}
                            >
                                {Icon && (
                                    <Icon
                                        style={{
                                            flex: '0 1 1.8rem',
                                            width: '1.8rem',
                                            height: '1.8rem',
                                        }}
                                    />
                                )}

                                <p
                                    style={{
                                        flex: '1',
                                        fontSize: '1.3rem',
                                        fontStyle: 'normal',
                                        fontWeight: '500',
                                        letterSpacing: '0.026rem',
                                    }}
                                >
                                    {langName[option]}
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};
