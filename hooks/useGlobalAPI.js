import { useEffect } from 'react';
import { useSelector } from 'react-redux';


export default function useGlobalAPI({ onCancel, onSuccess }) {
  const gAPIS = useSelector(({ globalAPIS }) => globalAPIS);
  useEffect(() => {
    if (gAPIS.hasError) {
      onCancel();
    } else if (gAPIS.success) {
      onSuccess();
    }
  }, [gAPIS]);
}
