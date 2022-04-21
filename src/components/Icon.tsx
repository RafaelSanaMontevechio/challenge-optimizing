import { memo } from 'react';

import Drama from './Icons/Drama';
import Action from './Icons/Action';
import Comedy from './Icons/Comedy';
import Family from './Icons/Family';
import Horror from './Icons/Horror';
import Documentary from './Icons/Documentary';

interface IconProps {
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  color: string;
}

const icons = {
  action: Action,
  comedy: Comedy,
  documentary: Documentary,
  drama: Drama,
  horror: Horror,
  family: Family,
};

function IconComponent({ name, color }: IconProps) {
  const icon = icons[name](color);

  return icon;
}

export const Icon = memo(IconComponent, (prevProps, nextProps) => {
  return Object.is(prevProps, nextProps);
});
