import { TestBed, inject } from '@angular/core/testing';

import { ChatWindowMsgsService } from './chat-window-msgs.service';

describe('ChatWindowMsgsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatWindowMsgsService]
    });
  });

  it('should be created', inject([ChatWindowMsgsService], (service: ChatWindowMsgsService) => {
    expect(service).toBeTruthy();
  }));
});
