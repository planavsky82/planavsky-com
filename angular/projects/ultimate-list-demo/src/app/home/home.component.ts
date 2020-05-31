import { Component, OnInit } from '@angular/core';
import { SampleComponent } from '../sample.component';
import { UlimateListItem } from '../../../../ultimate-list/src/lib/list';

@Component({
  selector: 'ultimate-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public collection: UlimateListItem[] = [
    {
      id: 1,
      title: 'Pittsburgh, PA',
      desc: 'The Steel City',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      },
      color: '#00ff00'
    },
    {
      id: 2,
      title: 'New York, NY',
      desc: 'The Big Apple',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      },
    },
    {
      id: 3,
      title: 'Philadelphia, PA',
      desc: 'The City of Brotherly Love',
      icon: 'fa-bell',
      component: SampleComponent,
      data: {
        info: '11223344'
      },
      color: '#ff00ff'
    },
    {
      id: 4,
      title: 'Atlanta, GA',
      desc: 'The ATL',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 5,
      title: 'Washington DC',
      desc: 'The Nation\'s Captiol',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 6,
      title: 'Erie, PA',
      icon: 'fa-home',
      desc: 'Gem City',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 7,
      title: 'Ocean City, MD',
      desc: 'OC',
      icon: 'fa-square',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 8,
      title: 'Myrtle Beach, SC',
      desc: 'Seaside Golf Capital of the World',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 9,
      title: 'State College, PA',
      desc: 'Happy Valley',
      icon: 'fa-circle',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 10,
      title: 'Buffalo, NY',
      desc: 'The City of Light',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 11,
      title: 'St. Louis, MO',
      desc: 'Gateway to the West',
      component: SampleComponent,
      data: {
        info: '11223344'
      },
      icon: 'fa-home'
    },
    {
      id: 12,
      title: 'Boston, MA',
      desc: 'Beantown',
      component: SampleComponent,
      data: {
        info: '11223344'
      },
      icon: 'fa-home'
    },
    {
      id: 13,
      title: 'Cleveland, OH',
      desc: 'The Rock and Roll Capital of the World',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 14,
      title: 'Fort Lauderdale, FL',
      desc: 'Venice of America',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 15,
      title: 'Las Vegas, NV',
      desc: 'Gambling Capital of the World',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 16,
      title: 'Freeport, Bahamas',
      desc: 'The Industrial Capital',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 17,
      title: 'Morgantown, WV',
      desc: 'Home to WVU',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 18,
      title: 'Whistler, BC',
      desc: 'Home of the 2010 Winter Olympics',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 19,
      title: 'Wheeling, WV',
      desc: 'Nail City',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 20,
      title: 'Detroit, MI',
      desc: 'Motor City',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 21,
      title: 'Windsor, ON',
      desc: 'The City of Roses',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 22,
      title: 'Kane, PA',
      desc: 'City Description',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 23,
      title: 'Charlotte, NC',
      desc: 'Horsemen Country',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 24,
      title: 'Chicago, IL',
      desc: 'The Windy City',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 25,
      title: 'Vancouver, BC',
      desc: 'City Description',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 26,
      title: 'Salt Lake City, UT',
      desc: 'City Description',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    },
    {
      id: 27,
      title: 'Orlando, FL',
      desc: 'City Description',
      icon: 'fa-home',
      component: SampleComponent,
      data: {
        info: '11223344'
      }
    }
  ];

}
