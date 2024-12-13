import { getUser, getUsers } from '@/services/api/user';
import axios from 'axios';

vi.mock('axios');

test('Status 404 for user', async () => {
  (axios.get as jest.Mock).mockRejectedValueOnce({
    response: {
      status: 404,
      data: { message: 'User not found' },
    },
  });

  try {
    await getUsers(123*1000);
  } catch (err: any) {
    expect(err.response.status).toBe(404);
    expect(err.response.data.message).toBe('User not found');
  }
});
