import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from '../../atoms';

export const Burger = ({ open, setOpen, ...props }) => {

    const isExpanded = open ? true : false;

    return (
        <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}

Burger.propTypes = {
      open: bool.isRequired,
      setOpen: func.isRequired,
};

