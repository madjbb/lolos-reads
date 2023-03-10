import React, {createContext, useCallback, useState} from 'react';

export const SnackbarContext = createContext({
  open: false,
  autoHideDuration: 6000,
  severity: "",
  message: "",
  openSnackbar: () => {},
  closeSnackbar: () => {},
});

export const SnackbarProvider = ({children}) => {
  const [open, setOpen] = useState(false);
  const [autoHideDuration, setAutoHideDuration] = useState(6000);
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");

  const openSnackbar = useCallback(
    ({severity, message, autoHideDuration=6000}) => {
      setOpen(true);
      setSeverity(severity);
      setMessage(message);
      setAutoHideDuration(autoHideDuration);
    },
    [open, setOpen, autoHideDuration, setAutoHideDuration, severity, setSeverity, message, setMessage],
  );

  const closeSnackbar = useCallback(
    () => {
      setOpen(false);
      // setSeverity("");
      // setMessage("");
      setAutoHideDuration(6000);
    },
    [open, setOpen, autoHideDuration, setAutoHideDuration, severity, setSeverity, message, setMessage],
  )
  

  return (
    <SnackbarContext.Provider value={{
      open,
      autoHideDuration,
      severity,
      message,
      openSnackbar,
      closeSnackbar,
    }}>
      {children}
    </SnackbarContext.Provider>
  );
  

};
