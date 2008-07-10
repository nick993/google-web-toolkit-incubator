/*
 * Copyright 2008 Google Inc.
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
package com.google.gwt.libideas.resources.css.ast;

/**
 * Represents a sprited image.
 */
public class CssSprite extends CssNode {
  private final String cssClass;
  private final String resourceFunction;

  public CssSprite(String cssClass, String resourceFunction) {
    this.cssClass = cssClass;
    this.resourceFunction = resourceFunction;
  }

  public String getCssClass() {
    return cssClass;
  }

  public String getResourceFunction() {
    return resourceFunction;
  }

  public void traverse(CssVisitor visitor, Context context) {
    visitor.visit(this, context);
    visitor.endVisit(this, context);
  }
}
