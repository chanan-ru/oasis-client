import { Button, Row, Col } from 'react-bootstrap';

export const DeleteUser = ({ storedToken, storedUser }) => {
    const handleDeregister = () => {
        const userWarning = confirm(
            'Would you like to delete your account'
        );

        userWarning === false
            ? alert('Deleting account has been cancled.')
            : fetch(
                `https://oasismovie.herokuapp.com/users/${storedUser.Username}`,
                {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${storedToken}`,
                        'Content-Type': 'application/json',
                    },
                }
            )
                .then((response) => {
                    if (response.ok) {
                        alert('Account has been deleted');
                        localStorage.clear();
                        window.location.reload();
                    } else {
                        alert('Something went wrong');
                    }
                })
                .catch((e) => console.log(e));
    };

    return (
        <Row>
            <Col>
                <div>
                    <Button
                        onClick={() => handleDeregister(storedUser._id)}
                        className='button-delete mt-3 mb-5'
                        variant='danger'
                    >
                        Delete Account
                    </Button>
                </div>
            </Col>
        </Row>
    );
};