import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSlides } from '../../../store/main-slides/actions';
import { selectMainSlides } from '../../../store/main-slides/selectors';

export default function () {
  const items = useSelector(selectMainSlides);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSlides());
  }, []);

  return { items };
}
