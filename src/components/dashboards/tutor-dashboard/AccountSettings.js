import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import ChangePasswordForm from '../../sharedComponents/ChangePassword';
import TutorHeader from '../../sharedComponents/TutorHeader';
import TutorSidebar from '../../sharedComponents/TutorSidebar';

// Optionally, you can separate the country list into a separate file or import it.
const countryList = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bonaire',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'British Indian Ocean Territory',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos [Keeling] Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Croatia',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Falkland Islands',
  'Faroe Islands',
  'Federated States of Micronesia',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Hashemite Kingdom of Jordan',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Ivory Coast',
  'Jamaica',
  'Japan',
  'Jersey',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Luxembourg',
  'Macao',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar [Burma]',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'North Korea',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestine',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn Islands',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Republic of Korea',
  'Republic of Lithuania',
  'Republic of Moldova',
  'Republic of the Congo',
  'Romania',
  'Russia',
  'Rwanda',
  'Réunion',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Martin',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Saint-Barthélemy',
  'Samoa',
  'San Marino',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard and Jan Mayen',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'São Tomé and Príncipe',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'U.S. Minor Outlying Islands',
  'U.S. Virgin Islands',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Wallis and Futuna',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

const timezoneList = [
  'Asia/Karachi',
  'America/New_York',
  'Europe/London',
  'Europe/Berlin',
  // Add other timezones as needed
];

const AccountSettings = () => {
  // State for Personal Info Form
  const [personalInfoForm, setPersonalInfoForm] = useState({
    name: '',
    address: '',
    country: 'Pakistan',
    timeZone: 'Asia/Karachi',
    city: '',
    phone: '',
  });

  // State for Alerts
  const [alert, setAlert] = useState({
    show: false,
    variant: '',
    message: '',
  });

  // Get the tutor ID from the token
  const token = localStorage.getItem('token');
  const decodedToken = jwtDecode(token);
  const tutorId = decodedToken.id;

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/tutor/${tutorId}`);
        const data = response.data.tutor; // Access the tutor object from the response

        setPersonalInfoForm({
          name: data.name || '',
          address: data.address || '',
          country: data.country || 'Pakistan',
          timeZone: data.timeZone || 'Asia/Karachi',
          city: data.city || '',
          phone: data.phone || '',
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
        setAlert({
          show: true,
          variant: 'danger',
          message: 'Failed to fetch user data.',
        });
      }
    };

    fetchUserData();
  }, [tutorId]);

  // Handle Personal Info Form Input Change
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfoForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle Personal Info Form Submission
  const handlePersonalInfoSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8000/api/v1/tutor/${tutorId}`, // Make sure the endpoint matches the router setup
        personalInfoForm
      );

      if (response.status === 200) {
        setAlert({
          show: true,
          variant: 'success',
          message: response.data.message,
        });
      }
    } catch (error) {
      console.error('Error updating personal information:', error);
      setAlert({
        show: true,
        variant: 'danger',
        message:
          (error.response && error.response.data.message) ||
          'Failed to update personal information.',
      });
    }
  };


  return (
    <>
      <TutorHeader />
      <Row>
        <Col className="col-4 col-md-3 col-xl-2">
          <TutorSidebar />
        </Col>
        <Col md={9} className="content-col">
          <ChangePasswordForm
            apiEndpoint="http://localhost:8000/api/v1/tutor"
            userRole="tutor"
            tokenKey="token"
          />
          <h3 className="mb-4 ms-4">Personal Info</h3>
          {alert.show && (
            <div className={`alert alert-${alert.variant}`} role="alert">
              {alert.message}
            </div>
          )}
          <Form className="m-4" onSubmit={handlePersonalInfoSubmit}>
            {/* Name */}
            <Form.Group className="mb-3" controlId="user_name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={personalInfoForm.name}
                onChange={handlePersonalInfoChange}
                required
              />
            </Form.Group>

            {/* Address */}
            <Form.Group className="mb-3" controlId="user_address">
              <Form.Label>Address:</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={personalInfoForm.address}
                onChange={handlePersonalInfoChange}
                required
              />
            </Form.Group>

            {/* Country */}
            <Form.Group className="mb-3" controlId="user_country">
              <Form.Label>Country:</Form.Label>
              <Form.Control
                as="select"
                name="country"
                value={personalInfoForm.country}
                onChange={handlePersonalInfoChange}
                required
              >
                {/* Assuming countryList is defined */}
                {countryList.map((country, index) => (
                  <option key={index} value={country}>
                    {country}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            {/* Timezone */}
            <Form.Group className="mb-3" controlId="user_time_zone">
              <Form.Label>Timezone:</Form.Label>
              <Form.Control
                as="select"
                name="timeZone"
                value={personalInfoForm.timeZone}
                onChange={handlePersonalInfoChange}
                required
              >
                {/* Assuming timezoneList is defined */}
                {timezoneList.map((tz, index) => (
                  <option key={index} value={tz}>
                    {tz}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            {/* City */}
            <Form.Group className="mb-3" controlId="user_city">
              <Form.Label>City:</Form.Label>
              <Form.Control
                type="text"
                name="city"
                value={personalInfoForm.city}
                onChange={handlePersonalInfoChange}
                placeholder="City"
                required
              />
            </Form.Group>

            {/* Phone Number */}
            <Form.Group className="mb-3" controlId="user_phone">
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                value={personalInfoForm.phone}
                onChange={handlePersonalInfoChange}
                placeholder="03001234567"
                required
              />
              <Form.Text className="text-muted">
                Please provide a phone number where a Tutor Relations Officer can contact you.
              </Form.Text>
            </Form.Group>

            {/* Submit Button */}
            <div className="text-end">
              <Button
                variant="secondary"
                href={`/tutors/${tutorId}/dashboard`} // Change the path to redirect after canceling
                className="me-2"
              >
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Save
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default AccountSettings;
