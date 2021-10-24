import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals2.jpg';
import classes from './Header.module.css';

const Header = () => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>Reactive Meals</h1>
				<HeaderCartButton />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt='A table full of delicious food!' />
			</div>
		</Fragment>
	);
};

export default Header;
