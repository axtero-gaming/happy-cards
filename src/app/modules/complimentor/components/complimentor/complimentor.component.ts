import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BaseComponent } from '@shared/base';

import { MessagesArbiter } from '../../services/message.arbiter';

interface ComplimentDescriptor {
  id: number;
  img: string;
  text: string;
}

@Component({
  selector: 'ag-complimentor',
  templateUrl: './complimentor.component.html',
  styleUrls: [ './complimentor.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComplimentorComponent extends BaseComponent implements OnInit, AfterViewInit {
  static nextId: number = 0;
  static getNextId (): number {
    return ComplimentorComponent.nextId++;
  }

  public compliments: ComplimentDescriptor[] = [
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img1.svg`,
      text: `Привет!!!`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img2.svg`,
      text: `Я Лими!!!`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img3.svg`,
      text: `Я бываю<br>глупым`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img4.svg`,
      text: `Но это и<br>не тайна`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img5.svg`,
      text: `Ладно.<br>К делу`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img6.svg`,
      text: `Лими появился<br>для улыбки :О`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img7.svg`,
      text: `Ооо, постой, а я<br>знаю интересное`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img8.svg`,
      text: `У каждого<br>человека есть<br>своя звезда`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img9.svg`,
      text: `Хоть Лими прожил<br>и не много, но Лими<br>повстречал свою<br>звезду (^o^)/`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img10.svg`,
      text: `А ещё, Лими<br>вампырка ^_^*`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img11.svg`,
      text: `Так. Теперь<br>точно к делу.`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img12.svg`,
      text: `Лими тут по<br><s>кровушку</s> твою.<br>Ой, улыбку :)`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img13.svg`,
      text: `Оххх, Лими как<br>напридумывает!)`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img14.svg`,
      text: `А ты знала, что<br>апрель это месяц<br>цветения? Самые<br>прекрасные цветы<br>рождаются в апреле`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img15.svg`,
      text: `Ооо, а ведь недавно мир<br>потряс шок. Ежи основали<br>культ розовых тучь!`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img16.svg`,
      text: `Мне тут нашептали, что<br>солнце иногда смущается,<br>когда тебя видит`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img17.svg`,
      text: `Оказывается, коты на<br>столько хитры, что<br>выбирают только<br>самых-самых :О`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img18.svg`,
      text: `Лими хоть и не<br>солнце, но тоже<br>светится от счастья,<br>когда тебя видит`,
    },
    {
      id: ComplimentorComponent.getNextId(),
      img: `assets/images/complimentor/img1.svg`,
      text: `Лими будет рад, если<br>сегодня на одну улыбку<br>станет больше :)`,
    },
  ];

  public activeComplimentId: number;
  public activeCompliment: ComplimentDescriptor;

  constructor (
    // Angular
    protected changeDetection: ChangeDetectorRef,
    private titleService: Title,
    // Services
    private messagesArbiter: MessagesArbiter,
  ) {
    super(changeDetection);
  }

  ngOnInit (
  ): void {
    const firstCompliment = _.head(this.compliments);
    this.activeComplimentId = firstCompliment.id;

    this.titleService.setTitle(`Complimentor`);
    this.updateView();
  }

  updateView (): void {
    this.activeCompliment = _.find(this.compliments, { id: this.activeComplimentId });
    this.forceRender();
  }

  ngAfterViewInit (): void {
    this.forceRender();
  }

  goAreaCompliment (event: MouseEvent): void {
    if (event.pageX > window.innerWidth / 2) {
      this.goNextCompliment();
    } else {
      this.goPrevCompliment();
    }
  }

  goPrevCompliment (): void {
    const activeComplimentIndex = _.findIndex(this.compliments, { id: this.activeComplimentId });
    if (activeComplimentIndex <= 0) {
      return;
    }
    this.activeComplimentId -= 1;
    this.updateView();
  }

  goNextCompliment (): void {
    const activeComplimentIndex = _.findIndex(this.compliments, { id: this.activeComplimentId });
    if (activeComplimentIndex >= this.compliments.length - 1) {
      return;
    }
    this.activeComplimentId += 1;
    this.updateView();
  }
}
