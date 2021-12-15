import React from "react";

export const ResponsiveImage = (props) => {
  const { small, medium } = props.image;

  if (props.webp) {
    const { smallwebp, mediumwebp } = props.webp;
    return (
      <picture className={props.className} style={props.style}>
        <source
          type="image/webp"
          srcSet={`${smallwebp} 768w, ${mediumwebp} 1280w`}
        />
        <source type="image/jpeg" srcSet={`${small} 768w, ${medium} 1280w`} />
        <img
          className={props.className}
          style={props.style}
          src={small}
          alt={props.alt}
        />
      </picture>
    );
  } else {
    return (
      <picture className={props.className} style={props.style}>
        <source type="image/jpeg" srcSet={`${small} 768w, ${medium} 1280w`} />
        <img
          className={props.className}
          style={props.style}
          src={small}
          alt={props.alt}
        />
      </picture>
    );
  }
};

export const ResponsiveImageThumbnail = (props) => {
  const { webpimage, image } = props.image;
  const { styleI, innerRef, alt, classNameI } = props;
  return (
    <picture>
      <source type="image/webp" srcSet={webpimage} />
      <source type="image/jpeg" srcSet={image} />
      <img
        className={classNameI}
        ref={innerRef}
        style={styleI}
        src={image}
        alt={alt}
      />
    </picture>
  );
};
