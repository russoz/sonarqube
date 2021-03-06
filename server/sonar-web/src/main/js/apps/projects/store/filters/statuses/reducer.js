/*
 * SonarQube
 * Copyright (C) 2009-2016 SonarSource SA
 * mailto:contact AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { OPEN_FILTER, CLOSE_FILTER, CLOSE_ALL_FILTERS } from './actions';

export const OPEN = 'OPEN';
export const CLOSED = 'CLOSED';

const closeAll = state => {
  const newState = { ...state };
  Object.keys(newState).forEach(key => newState[key] = CLOSED);
  return newState;
};

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case OPEN_FILTER:
      return { ...state, [action.key]: OPEN };
    case CLOSE_FILTER:
      return { ...state, [action.key]: CLOSED };
    case CLOSE_ALL_FILTERS:
      return closeAll(state);
    default:
      return state;
  }
};

export default reducer;

export const getStatus = (state, key) => (
    state[key]
);
