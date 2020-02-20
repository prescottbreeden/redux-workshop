const DATA_NORMALIZED = 'DATA_NORMALIZED';

export const dataNormalized = ({entity}) => ({
  type: `${feature} ${DATA_NORMALIZED}`,
  meta: {entity},
});
