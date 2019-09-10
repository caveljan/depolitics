import React, {
    useEffect,
    useCallback,
} from 'react';
import { connect } from 'react-redux';
import { StyledView } from './styled';
import {
    handleView,
} from './logic';



interface ViewProperties {

}


const View: React.FC<ViewProperties> = (properties) => {
    const {

    } = properties;

    return (
        <StyledView>

        </StyledView>
    );
}


const mapStateToProps = (state: any) => ({

});


const mapDispatchToProps = (dispatch: any) => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(View);
