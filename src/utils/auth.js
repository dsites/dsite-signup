import { key_utils as keyUtils } from 'dpayjs/lib/auth/ecc';

const createSuggestedPassword = () => `P${keyUtils.get_random_key().toWif()}`;

export default createSuggestedPassword;
