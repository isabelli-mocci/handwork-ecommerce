const DROPDOWN_CLASSES = {
  wrapper: 'relative inline-flex items-center border border-gray-200 rounded-sm px-2',
  button: 'flex items-center gap-2 w-full py-1 px-2 text-sm bg-transparent border-0 focus:outline-none cursor-pointer',
  icon: 'w-4 h-4 mr-1 align-middle inline-block',
  svg: 'w-4 h-4 text-gray-400 ml-auto',
  list: 'absolute left-0 top-full w-full bg-[#f5f0ec] border border-gray-200 z-50 py-2 min-w-[130px] shadow-lg',
  listItemBase: 'px-5 py-2 text-[0.9rem] text-[#786864] cursor-pointer border-0 transition-colors duration-200 outline-none',
  listItemSelected: 'bg-[#f5f0ec] text-[#5e3517] font-semibold',
  listItemHoverFocus: 'hover:bg-[#f5f0ec] hover:text-[#5e3517] focus:bg-[#f5f0ec] focus:text-[#5e3517]',
  listItemBorder: 'border-b border-[#f1f1f1]'
};

export default DROPDOWN_CLASSES;
