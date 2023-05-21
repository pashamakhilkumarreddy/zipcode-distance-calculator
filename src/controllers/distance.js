import { findDistance } from '../services';
import { INTERNAL_SERVER_ERROR } from '../utils/constants';

export const getDistance = async (req, res) => {
  try {
    const distance = await findDistance(req, res);
    const { zipcode1, zipcode2 } = req.params;
    res.send({
      status: 200,
      messages: [
        {
          message: `The distance between ${zipcode1} and ${zipcode2} is ${distance}`,
        },
      ],
    });
  } catch (err) {
    res.send({
      status: 500,
      errors: [
        {
          message: INTERNAL_SERVER_ERROR,
        },
      ],
    });
  }
};
