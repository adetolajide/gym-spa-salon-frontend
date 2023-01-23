import { AppLayout } from "../../../layouts";
import React from "react";
import ServicesAside from "../../../components/services/aside";
import ServicesContent from "../../../components/services";

const Services = () => {
  return (
    <AppLayout>
      <ServicesContent />
      <ServicesAside />
    </AppLayout>
  );
};

export default Services;
