import { ApiProperty } from '@nestjs/swagger'

export class EventDTO {
  @ApiProperty({
    type: String,
    description:
      'The anonymous ID of the user. See [anonymousId](https://segment.com/docs/connections/spec/common/#anonymousid).',
    example: 'guest-1234567890',
    required: false,
  })
  anonymousId?: string
  context?: {
    active?: boolean
    app?: {
      name?: string
      version?: string
      build?: string
      namespace?: string
    }
    campaign?: {
      name?: string
      source?: string
      medium?: string
      term?: string
      content?: string
    }
    device?: {
      id?: string
      advertisingId?: string
      adTrackingEnabled?: boolean
      manufacturer?: string
      model?: string
      name?: string
      type?: string
      token?: string
    }
    ip?: string
    library?: {
      name?: string
      version?: string
    }
    locale?: string
    network?: {
      bluetooth?: boolean
      carrier?: string
      cellular?: boolean
      wifi?: boolean
    }
    os?: {
      name?: string
      version?: string
    }
    page?: {
      path?: string
      referrer?: string
      search?: string
      title?: string
      url?: string
    }
    referrer?: {
      id?: string
      type?: string
    }
    screen?: {
      width?: number
      height?: number
      density?: number
    }
    groupId?: string
    timezone?: string
    userAgent?: string
    userAgentData?: {
      brands?: {
        brand?: string
        version?: string
      }[]
      mobile?: boolean
      platform?: string
    }
  }
  integrations?: {
    All?: boolean
    Mixpanel?: boolean
    Salesforce?: boolean
  }
  @ApiProperty({
    type: String,
    description: 'The event name. Used only with `type: "track"`.',
    example: 'UserSignedUp',
    required: false,
  })
  event?: string
  messageId?: string
  receivedAt?: string
  sentAt?: string
  @ApiProperty({
    type: String,
    description: 'The timestamp of the event. Autogenerated if not provided.',
    example: '2021-01-01T00:00:00Z',
    required: false,
  })
  timestamp?: string
  @ApiProperty({
    type: String,
    description: 'The type of the event. Possible values: `track`, `identify`, `group`.',
    example: 'track',
    required: false,
  })
  type: 'track' | 'identify' | 'group'
  @ApiProperty({
    type: String,
    description: 'The ID of the user.',
    example: 'user-1234567890',
    required: false,
  })
  userId?: string
  @ApiProperty({
    type: String,
    description: 'The ID of the group.',
    example: 'group-1234567890',
    required: false,
  })
  groupId?: string
  @ApiProperty({
    type: Object,
    description: 'The properties of the event. Only used with `type: "track"`.',
    example: {
      page: '/home',
      referrer: 'https://www.google.com',
    },
    required: false,
  })
  properties?: {
    [key: string]: any
  }
  @ApiProperty({
    type: Object,
    description: 'The traits of the user or group.',
    example: {
      email: 'john.doe@example.com',
      name: 'John Doe',
    },
    required: false,
  })
  traits?: {
    [key: string]: any
  }
  @ApiProperty({
    type: String,
    description:
      "Optional instance ID. Instance IDs are used to partition events by source. It is typically used for isolating data for the same customer. For instance, if you have a SaaS product, you may want to segment events by customer. In this case, you can set the instance ID to the customer's organizaiton ID.",
    example: 'customer-1234567890',
    required: false,
  })
  instanceId?: string
}

export class EventsDTO {
  @ApiProperty({
    type: [EventDTO],
    description: 'The events to insert.',
  })
  events: EventDTO[]
}

export class Event {
  uuid: string
  type: string
  event: string
  userId?: string
  groupId?: string
  anonymousId?: string
  instanceId?: string
  properties?: string
  traits?: string
  context?: string
  timestamp: Date
  parsedAt: Date
}
