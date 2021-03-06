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
import Filter from './Filter';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import omitBy from 'lodash/omitBy';
import isNil from 'lodash/isNil';
import { getProjectsAppFilterStatus, getProjectsAppFacetByProperty } from '../../../app/store/rootReducer';
import { openFilter, closeFilter } from '../store/filters/statuses/actions';
import { OPEN } from '../store/filters/statuses/reducer';

const mapStateToProps = (state, ownProps) => ({
  isOpen: getProjectsAppFilterStatus(state, ownProps.property) === OPEN,
  value: ownProps.query[ownProps.property],
  facet: getProjectsAppFacetByProperty(state, ownProps.property),
  getFilterUrl: part => {
    const query = omitBy({ ...ownProps.query, ...part }, isNil);
    return { pathname: '/projects', query };
  }
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  openFilter: () => dispatch(openFilter(ownProps.property)),
  closeFilter: () => dispatch(closeFilter(ownProps.property))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Filter));
