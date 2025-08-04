import React from 'react';
import { FormButton } from './FormButton';

const FORM_TEXTS = {
  backButton: 'Back to Shipping Delivery',
  submitButton: 'Complete Payment'
} as const;

interface FormActionsProps {
  loading: boolean;
  onBack: () => void;
}

const FormActions: React.FC<FormActionsProps> = ({ loading, onBack }) => (
  <div className='flex flex-col gap-6 mt-8 md:flex-row md:justify-center lg:justify-start'>
    <FormButton
      type='button'
      variant='secondary'
      onClick={onBack}
      loading={loading}
    >
      {FORM_TEXTS.backButton}
    </FormButton>
    <FormButton
      type='submit'
      variant='primary'
      loading={loading}
    >
      {FORM_TEXTS.submitButton}
    </FormButton>
  </div>
);

export default FormActions;
