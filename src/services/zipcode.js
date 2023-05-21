import axios from 'axios';
import { ZIPCODE_API_KEY, ZIPCODE_URL } from '../config';
import { INTERNAL_SERVER_ERROR } from '../utils/constants';

export const findDistance = async (req, res) => {
  try {
    const { zipcode1, zipcode2 } = req.params;
    if (!zipcode1 || !zipcode2) {
      return res.send({
        status: 400,
        errors: [
          {
            message: 'Unable to process request, both the zipcodes are required to calculate the distance',
          },
        ],
      });
    }
    const resp = await axios.get(
      `${ZIPCODE_URL}/${ZIPCODE_API_KEY}/distance.json/${zipcode1}/${zipcode2}/mile`,
    );
    if (resp && resp.status === 200 && resp.data) {
      return resp.data;
    }
    throw new Error(`Unable to find the distance between ${zipcode1} & ${zipcode2}`);
  } catch (err) {
    console.error(err);
    return res.send({
      status: 500,
      errors: [
        {
          message: INTERNAL_SERVER_ERROR,
        },
      ],
    });
  }
};
