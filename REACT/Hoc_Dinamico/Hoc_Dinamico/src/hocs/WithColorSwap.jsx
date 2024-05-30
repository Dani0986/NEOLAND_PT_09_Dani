// eslint-disable-next-line react/display-name
export const WithColorSwap = (Component) => (props) => {
    return (
      <div className='color-swap'>
        <Component {...props} />
      </div>
    );
  };
  