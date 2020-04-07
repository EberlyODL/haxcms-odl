const ImaginaryMixin = (base) =>
  class Imaginary extends base {
    constructor() {
      super();
      this.__imaginaryUrl = window.__env.IMAGINARY_URL;
      this.__imaginaryHostUrl = window.__env.IMAGINARY_HOST_URL;
    }

    imaginaryGenerateUrl(image, operation = 'resize', options = []) {
      if (this.__imaginaryHostUrl && this.__imaginaryUrl && image) {
        const optionsString = options.join('&');
        return `${this.__imaginaryUrl}/${operation}?url=${
          this.__imaginaryHostUrl
        }/${image}&${optionsString}`;
      } else {
        return image;
      }
    }
  };

export { ImaginaryMixin };
