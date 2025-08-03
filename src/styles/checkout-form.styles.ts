export const styles = {
  container: 'w-full lg:max-w-[1000px]',
  sectionHeader: 'w-full px-4 md:px-8 lg:px-0',
  title: 'font-cardo font-bold text-primary text-md sm:text-xl my-4',
  form: 'grid gap-6 w-full',
  gridContainer: 'grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 w-full',
  fieldContainer: 'flex flex-col w-full px-4 md:px-8 lg:px-0',
  shippingMethodsContainer: 'flex flex-col gap-2 px-4 md:px-8 lg:px-0',
  submitButton: (loading: boolean) => `
    w-full md:w-[660px] lg:w-[400px] 
    px-6 py-3 border border-text text-xs 
    font-semibold uppercase transition-colors duration-200 
    hover:bg-primary hover:text-white 
    focus:bg-primary focus:text-white 
    flex items-center justify-center md:mx-auto lg:mx-0
    ${loading ? 'pointer-events-none opacity-60' : ''}
  `,
  backButton: 'mt-4 block w-full text-center md:text-center lg:text-left text-xs font-semibold uppercase underline cursor-pointer hover:text-primary/90 transition-colors px-4 md:px-0'
};
