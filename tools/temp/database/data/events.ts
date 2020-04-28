export const COLLECTION: any = {
  1: {
    event_id: 1,
    event_type: 'type',
    event_logo: 'https://example.com/my-avatar.png',
    title: 'First Event',
    subtitle: 'Event',
    supporter: 1,
    volunteer: 1,
    sponsor: 0,
    labor: 0,
    items: 1,
    money: 1,
    frequency: 'Permanent/One-time',
    needs: 'Single-need/Multiple-need',
    payment_frequency: 'One-time/Recurring',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    short_description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    start_date: '2019-03-01',
    end_date: '2019-03-10',
    start_time: '10:00',
    end_time: '18:00',
    location: 'Location',
    volunteer_job: 'JOB',
    volunteer_number: '12154',
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  },
  2: {
    event_id: 2,
    event_type: 'type',
    event_logo: 'https://example.com/my-avatar.png',
    title: 'Second Event',
    subtitle: 'Event',
    supporter: 1,
    volunteer: 1,
    sponsor: 0,
    Labor: 0,
    Items: 1,
    Money: 1,
    frequency: 'Permanent/One-time',
    needs: 'Single-need/Multiple-need',
    payment_frequency: 'One-time/Recurring',
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
    short_description:
      'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
    start_date: '2019-03-10',
    end_date: '2019-03-20',
    start_time: '09:00',
    end_time: '17:00',
    location: 'Location',
    volunteer_job: 'JOB',
    volunteer_number: '12154',
    status: 1,
    is_deleted: 0,
    created_at: '2019-02-12 12:53',
    updated_at: null
  }
};

export function findCollectionById(id: number) {
  return COLLECTION[id];
}
