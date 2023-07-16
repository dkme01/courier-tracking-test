export enum TrackingStatusEnum {
  "invoiceEmmit" = "Invoice Emmited",
  "onTravel" = "Traveling to Destination",
  "delivered" = "Delivered",
}

export interface TrackingInfo {
  clientName: string;
  packageCode: string;
  zipCode: string;
  city: string;
  state: string;
  status: TrackingStatusEnum;
  updateDate: string;
  endDateExpectation: string;
}
