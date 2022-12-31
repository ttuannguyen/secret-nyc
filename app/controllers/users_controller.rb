class UsersController < ApplicationController
    def index
        render json: User.all
    end

    def show
        render json: SecretSpot.all
    end

    def create
        #
    end


    private
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end
