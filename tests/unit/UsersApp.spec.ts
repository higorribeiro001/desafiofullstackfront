import { getUser, getUsers } from '@/services/api/user';
import axios from 'axios';

vi.mock('axios');

test('Status 200 for user', async () => {
  (axios.get as jest.Mock).mockRejectedValueOnce({
    response: {
      status: 200,
    },
  });

  try {
    await getUsers(1);
  } catch (err: any) {
    expect(err.response.status).toBe(200);
  }
});
