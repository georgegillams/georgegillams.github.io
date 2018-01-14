import React from 'react';
import BpkCard from 'bpk-component-card';
import Section from './Section';

import STYLES from './card.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

/* eslint-disable max-len */
const CommentInput = (props) => {
  const {
    light, linkUrl, imageSrc, title, className, ...rest
  } = props;

  const classNameFinal = [getClassName('card__image')];
  if (className) classNameFinal.push(className);

  return (
    <BpkCard className={classNameFinal.join(' ')} style={{ backgroundImage: `url(${imageSrc})` }} href={linkUrl} {...rest}>
      <Section light={light} name={title} textClassName={getClassName('pages__link')} />
    </BpkCard>
  );
};

export default CommentInput;
