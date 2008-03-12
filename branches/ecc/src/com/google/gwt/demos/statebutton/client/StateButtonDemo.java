/*
 * Copyright 2007 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package com.google.gwt.demos.statebutton.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.user.client.Command;
import com.google.gwt.user.client.ui.Image;
import com.google.gwt.user.client.ui.PushButton;

import java.util.ArrayList;

/**
 * Entry point classes define <code>onModuleLoad()</code>.
 */
public class StateButtonDemo implements EntryPoint {
   
  class StateButton extends PushButton {
    ArrayList options;
    Image downDownImage;
    class Option {
      public String inMenuName;
      public String displayedName;
      public String tooltip;
      public Command command;
    }

    StateButton(Image clickButton, ArrayList options) {
    }
  }

  /**
   * This is the entry point method.
   */
  public void onModuleLoad() {
  }
}
