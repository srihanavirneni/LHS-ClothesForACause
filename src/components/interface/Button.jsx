import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = (props) => {
    if (props.href) {
        return (
            <a
                className={`${props.classNames} button button--${
                    props.size || 'default'
                } ${props.inverse && 'button--inverse'} ${
                    props.danger && 'button--danger'
                } ${props.bold && 'button--bold'} ${
                    props.icon && 'button--icon'
                } ${props.secondary && 'button--secondary'}`}
                href={props.href}
            >
                {props.icon && (
                    <i
                        class={props.icon}
                        style={
                            !props.secondary
                                ? { color: '#ffffff' }
                                : { color: '#000000' }
                        }
                    />
                )}
                <p>{props.children}</p>
            </a>
        );
    }
    if (props.to) {
        return (
            <Link
                to={props.to}
                exact={props.exact}
                className={`${props.classNames} button button--${
                    props.size || 'default'
                } ${props.inverse && 'button--inverse'} ${
                    props.danger && 'button--danger'
                } ${props.bold && 'button--bold'} ${
                    props.icon && 'button--icon'
                } ${props.secondary && 'button--secondary'}`}
            >
                {props.icon && (
                    <i
                        class={props.icon}
                        style={
                            !props.secondary
                                ? { color: '#ffffff' }
                                : { color: '#000000' }
                        }
                    />
                )}
                <p>{props.children}</p>
            </Link>
        );
    }
    return (
        <button
            className={`${props.classNames} button button--${
                props.size || 'default'
            } ${props.inverse && 'button--inverse'} ${
                props.danger && 'button--danger'
            } ${props.bold && 'button--bold'} ${props.icon && 'button--icon'} ${
                props.secondary && 'button--secondary'
            }`}
            type={props.type}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.icon && (
                <i
                    class={props.icon}
                    style={
                        !props.secondary
                            ? { color: '#ffffff' }
                            : { color: '#000000' }
                    }
                />
            )}
            <p>{props.children}</p>
        </button>
    );
};

export default Button;
