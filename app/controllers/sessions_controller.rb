class SessionsController < ApplicationController
    def create
        #
    end

    def destroy
        session.delete(:user_id)
        head :no_content
    end
end
