const SENDER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZDY2MGQzYjVjYjZmMjE4NThlMTI2MzVlZTIxODllZTVkZTZiYzRkMGQ0M2U1ZTI1NDRiNzc1ZmYyYjJkYzYzOTVmZmZlNmZmNjkxNjMzMmIiLCJpYXQiOjE3ODA1MTAzMjkuODA1MzE5LCJuYmYiOjE3ODA1MTAzMjkuODA1MzIxLCJleHAiOjQ5MzQxMTAzMjkuODAzNDcxLCJzdWIiOiIxMDc2OTMzIiwic2NvcGVzIjpbXX0.Z3nl_ZUaQUF-C__OiIwrC-NRrfsSLN39A6M3I2j7eHSed0GLPClqwpyG4aPBNqIR5qPSMERSdxD2DIHgq_Cue7rHup1h2BYBx4eNUc7exYugf5oHPzFCEehZGvw_XVXrTLZZVmQVpueVU3rrANWyI17MbSSSmlJVpXeg0mMCLp8TjGnXoMBYvvMhqXLH2VWllwoqbUrlwqGv8mDDzQ7reKCLRrf3Eg8mgBTSXtIQwMfVhMN6FC4otSfliTEwq14-PAJEDXpAiNFcHLS9UYYQfc3NpzLRTZ-YhvFQ-il9cReRhkk5Z2BzoqahHyCwhKW4PazHG_cNOU2fnxsMbEMWjVM_FKbH5e6rwb2lVn9ihxCItobf3ahvWR5RzQykl_KZCExDwlB3oXYdtSe8SqQ3mFvyP8Ifoka1zl_05v0bxTpVzGZWjgmyu32_qwLq-PsyHMhsnIyXEaT-Yvp1RTkGmz1tQ-Ba4aXFg3wZOS_c5TVz60R2eEpXPTBFCmbMNZBnvXaCB8mEKDKm9F4rw2phnU-JLsAsvxHEB97fAFQTay0sNVdxsaxyR_EBWxqkNJbfJf84mu6U5yCzUXS890hUTPUmLhS_Y_-W2dzNqb-jw8QXJeH-rUXP-BrVeVgwqDDQWHiXWMdqvmv4RChU0knlqLgIpN7g_e6TGQzibCM2fPg';
const GROUP_ID = 'epnj71';

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  let email;
  try {
    ({ email } = JSON.parse(event.body));
  } catch {
    return { statusCode: 400, body: JSON.stringify({ message: 'Invalid request body' }) };
  }

  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ message: 'Email is required' }) };
  }

  const res = await fetch('https://api.sender.net/v2/subscribers', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SENDER_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, groups: [GROUP_ID] }),
  });

  const data = await res.json();

  return {
    statusCode: res.status,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  };
};
