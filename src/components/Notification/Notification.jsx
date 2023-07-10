import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <div>
      <Notification>{message}</Notification>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
