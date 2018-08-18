// @flow

const userImage = (size: number) => (name: string) =>
  // eslint-disable-next-line
  `https://api.adorable.io/avatars/${size}/${name}`;

export const defaultUserImageLarge = userImage(240);
export const defaultUserImageSmall = userImage(98);
